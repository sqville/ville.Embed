/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoSwitch",
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

   var pathdregular = "M4 4.5A2.5 2.5 0 0 1 6.5 2h5A2.5 2.5 0 0 1 14 4.5v.61l1.9-1.03a.75.75 0 0 1 1.1.66v4.52c0 .57-.6.93-1.1.66L14 8.89v.61a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 4 9.5v-5Zm10 3.25 2 1.09V5.16l-2 1.1v1.49ZM6.5 3C5.67 3 5 3.67 5 4.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5Zm-2.83 8.89c-.32.12-.6.26-.85.4-.41.27-.82.66-.82 1.21 0 .55.4.94.82 1.2.44.28 1.05.51 1.75.7a22.04 22.04 0 0 0 5.72.6l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L10.29 15H10c-2.04 0-3.87-.22-5.17-.57a5.55 5.55 0 0 1-1.47-.57C3 13.64 3 13.5 3 13.5c0 0 .01-.14.36-.36.27-.17.68-.34 1.21-.5a3.01 3.01 0 0 1-.9-.75Zm10.25.41c.3-.24.54-.54.72-.88l.8.18c.7.19 1.3.42 1.74.7.41.26.82.65.82 1.2 0 .55-.4.94-.82 1.2a6.5 6.5 0 0 1-1.75.7l-.85.2a.49.49 0 0 1-.58-.5c0-.24.18-.44.42-.5.26-.05.52-.1.75-.17a5.55 5.55 0 0 0 1.47-.57c.35-.22.36-.35.36-.36 0 0-.01-.14-.36-.36-.32-.2-.81-.4-1.47-.57-.37-.1-.8-.2-1.25-.27Z";
   var pathdfilled = "M6.5 2A2.5 2.5 0 0 0 4 4.5v5A2.5 2.5 0 0 0 6.5 12h4A2.5 2.5 0 0 0 13 9.5v-5A2.5 2.5 0 0 0 10.5 2h-4Zm9.4 7.92L14 8.89V5.1l1.9-1.03a.75.75 0 0 1 1.1.66v4.52c0 .57-.6.93-1.1.66ZM3.66 11.89c-.32.12-.6.26-.85.4-.41.27-.82.66-.82 1.21 0 .55.4.94.82 1.2.44.28 1.05.51 1.75.7a22.04 22.04 0 0 0 5.72.6l-1.14 1.15a.5.5 0 0 0 .7.7l2-2a.5.5 0 0 0 0-.7l-2-2a.5.5 0 0 0-.7.7L10.29 15H10c-2.04 0-3.87-.22-5.17-.57a5.55 5.55 0 0 1-1.47-.57C3 13.64 3 13.5 3 13.5c0 0 .01-.14.36-.36.27-.17.68-.34 1.21-.5a3.01 3.01 0 0 1-.9-.75Zm9.4.29c.27-.26.5-.57.65-.92.63.1 1.2.2 1.71.34.7.19 1.3.42 1.75.7.41.26.82.65.82 1.2 0 .55-.4.94-.82 1.2a6.5 6.5 0 0 1-1.75.7l-.85.2a.49.49 0 0 1-.58-.5c0-.24.18-.44.42-.5.26-.05.52-.1.75-.17a5.55 5.55 0 0 0 1.47-.57c.35-.22.36-.35.36-.36 0 0-.01-.14-.36-.36-.32-.2-.81-.4-1.47-.57-.6-.16-1.31-.3-2.1-.4Z";
   
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