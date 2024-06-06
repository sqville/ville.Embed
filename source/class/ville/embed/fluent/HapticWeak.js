/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.HapticWeak",
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

   var pathdregular = "M8.5 18a.5.5 0 0 1-.2-.04A3.94 3.94 0 0 1 6 14.43c0-1.3.6-1.97 1.13-2.55.49-.54.87-.97.87-1.89 0-.92-.38-1.34-.87-1.88C6.6 7.53 6 6.86 6 5.56a3.93 3.93 0 0 1 2.3-3.52.5.5 0 1 1 .4.92C8.6 3 7 3.73 7 5.56c0 .92.38 1.34.87 1.88C8.4 8.03 9 8.7 9 10c0 1.3-.6 1.97-1.13 2.55-.49.55-.87.97-.87 1.89 0 1.87 1.68 2.6 1.7 2.61a.5.5 0 0 1-.2.96Zm5.46-.3a.5.5 0 0 0-.26-.66c-.02 0-1.7-.75-1.7-2.61 0-.92.38-1.34.87-1.88.53-.6 1.13-1.26 1.13-2.56s-.6-1.96-1.13-2.55C12.4 6.9 12 6.48 12 5.56c0-1.83 1.61-2.56 1.7-2.6a.5.5 0 0 0-.4-.92c-.09.04-2.3 1-2.3 3.52 0 1.3.6 1.97 1.13 2.55.48.54.87.97.87 1.88 0 .92-.38 1.35-.87 1.88-.53.6-1.13 1.26-1.13 2.56 0 2.52 2.21 3.49 2.3 3.53a.5.5 0 0 0 .66-.26Z";
   var pathdfilled = "M8.75 18.25c-.1 0-.2-.02-.3-.06-.1-.04-2.45-1.1-2.45-3.76 0-1.4.66-2.13 1.2-2.72.46-.52.8-.9.8-1.72s-.34-1.19-.8-1.7C6.66 7.68 6 6.95 6 5.55a4.18 4.18 0 0 1 2.46-3.75.75.75 0 0 1 .59 1.38c-.07.03-1.55.7-1.55 2.38 0 .81.34 1.19.8 1.7.54.6 1.2 1.33 1.2 2.72 0 1.4-.66 2.13-1.2 2.72-.46.52-.8.9-.8 1.72 0 1.68 1.48 2.35 1.55 2.38a.75.75 0 0 1 .4.98.75.75 0 0 1-.7.46Zm5.69-.46a.75.75 0 0 0-.4-.98c-.05-.03-1.54-.7-1.54-2.38 0-.82.34-1.2.8-1.72A3.72 3.72 0 0 0 14.5 10c0-1.4-.66-2.13-1.2-2.72-.46-.52-.8-.89-.8-1.7 0-1.69 1.48-2.35 1.54-2.38a.75.75 0 0 0 .4-.98.75.75 0 0 0-.98-.4A4.18 4.18 0 0 0 11 5.56c0 1.4.66 2.13 1.2 2.72.46.52.8.9.8 1.71 0 .82-.34 1.2-.8 1.72a3.72 3.72 0 0 0-1.2 2.72c0 2.67 2.35 3.71 2.46 3.76a.75.75 0 0 0 .98-.4Z";
   
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