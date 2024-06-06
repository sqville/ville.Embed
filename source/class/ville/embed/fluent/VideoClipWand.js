/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoClipWand",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M7.26 6.06a.5.5 0 0 1 .5.02l4 2.5a.5.5 0 0 1 .02.84l-4 2.65a.5.5 0 0 1-.78-.42V6.5c0-.18.1-.35.26-.44ZM1 4.5A2.5 2.5 0 0 1 3.5 2h11A2.5 2.5 0 0 1 17 4.5v3.88A1.5 1.5 0 0 0 16 8V4.5c0-.83-.67-1.5-1.5-1.5h-11C2.67 3 2 3.67 2 4.5v9c0 .83.67 1.5 1.5 1.5h8.38l-1 1H3.5A2.5 2.5 0 0 1 1 13.5v-9Zm15.5 4.94a.5.5 0 0 0-1 0l-.1.79a2.5 2.5 0 0 1-2.17 2.18l-.8.1a.5.5 0 0 0 0 .99l.8.1a2.5 2.5 0 0 1 2.18 2.17l.1.8a.5.5 0 0 0 .99 0l.1-.8a2.5 2.5 0 0 1 2.17-2.18l.8-.1a.5.5 0 0 0 0-.99l-.8-.1a2.5 2.5 0 0 1-2.18-2.17l-.1-.8ZM14.6 13a3.5 3.5 0 0 0 1.4-1.4c.32.59.81 1.08 1.4 1.4a3.5 3.5 0 0 0-1.4 1.4 3.5 3.5 0 0 0-1.4-1.4Zm-.75 2.85a.5.5 0 0 0-.7-.7l-4 4a.5.5 0 1 0 .7.7l4-4Z";
   var pathdfilled = "M1 4.5A2.5 2.5 0 0 1 3.5 2h11A2.5 2.5 0 0 1 17 4.5v3.88a1.5 1.5 0 0 0-2.49.94l-.1.79a1.5 1.5 0 0 1-1.3 1.3l-.8.1a1.5 1.5 0 0 0 0 2.98h.07L10.88 16H3.5A2.5 2.5 0 0 1 1 13.5v-9Zm10.77 4.08-4-2.5A.5.5 0 0 0 7 6.5v5.15a.5.5 0 0 0 .78.42l4-2.65a.5.5 0 0 0-.01-.84Zm4.73.86a.5.5 0 0 0-1 0l-.1.79a2.5 2.5 0 0 1-2.17 2.18l-.8.1a.5.5 0 0 0 0 .99l.8.1a2.5 2.5 0 0 1 2.18 2.17l.1.8a.5.5 0 0 0 .99 0l.1-.8a2.5 2.5 0 0 1 2.17-2.18l.8-.1a.5.5 0 0 0 0-.99l-.8-.1a2.5 2.5 0 0 1-2.18-2.17l-.1-.8ZM14.6 13a3.5 3.5 0 0 0 1.4-1.4c.32.59.81 1.08 1.4 1.4a3.5 3.5 0 0 0-1.4 1.4 3.5 3.5 0 0 0-1.4-1.4Zm-.75 2.85a.5.5 0 0 0-.7-.7l-4 4a.5.5 0 1 0 .7.7l4-4Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});