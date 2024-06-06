/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.RibbonStar",
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

   var pathdregular = "M10.16 5.1a.18.18 0 0 0-.31 0l-.72 1.55a.18.18 0 0 1-.14.1l-1.7.2c-.15.02-.2.2-.1.3l1.26 1.17c.05.04.07.1.05.16l-.33 1.68c-.03.15.13.26.26.19l1.49-.84a.17.17 0 0 1 .17 0l1.5.84c.12.07.28-.04.25-.19l-.33-1.68a.18.18 0 0 1 .05-.16l1.26-1.16a.17.17 0 0 0-.1-.3l-1.7-.2a.18.18 0 0 1-.14-.1l-.72-1.56ZM16 8c0 1.78-.77 3.37-2 4.47v5.03a.5.5 0 0 1-.75.43L10 16.08l-3.25 1.85A.5.5 0 0 1 6 17.5v-5.03A5.98 5.98 0 0 1 10 2a6 6 0 0 1 6 6Zm-6 6c-1.1 0-2.12-.3-3-.8v3.44l2.75-1.57a.5.5 0 0 1 .5 0L13 16.64V13.2c-.88.5-1.9.8-3 .8Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z";
   var pathdfilled = "M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0ZM9.85 5.1l-.72 1.55a.18.18 0 0 1-.14.1l-1.7.2c-.14.02-.2.2-.1.3l1.26 1.17c.05.04.07.1.05.16l-.33 1.68c-.03.15.13.26.26.19l1.49-.84a.18.18 0 0 1 .17 0l1.5.84c.12.07.28-.04.25-.19l-.33-1.68a.17.17 0 0 1 .05-.16l1.26-1.16a.18.18 0 0 0-.1-.3l-1.7-.2a.17.17 0 0 1-.14-.1l-.72-1.56a.17.17 0 0 0-.31 0ZM10 15c1.49 0 2.87-.46 4-1.25v3.75a.5.5 0 0 1-.8.4L10 16l-3.2 1.9a.5.5 0 0 1-.8-.4v-3.75A6.97 6.97 0 0 0 10 15Z";
   
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