/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.MegaphoneCircle",
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

   var pathdregular = "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm5 2.02-1.17-.42c-.5-.17-.83-.64-.83-1.17v-.85c0-.53.33-1 .83-1.18l6.5-2.33c.81-.29 1.67.32 1.67 1.18v5.5c0 .87-.86 1.47-1.67 1.18l-1.38-.5A2 2 0 0 1 7 13v-.98Zm3 1.07-2-.7V13a1 1 0 0 0 2 .1Zm2.67-6.07-6.5 2.32a.25.25 0 0 0-.17.24v.85c0 .1.07.2.17.23l6.5 2.33c.16.06.33-.06.33-.24v-5.5c0-.17-.17-.3-.33-.23Z";
   var pathdfilled = "M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM7 12.02l-1.17-.42c-.5-.17-.83-.64-.83-1.17v-.85c0-.53.33-1 .83-1.18l6.5-2.33c.81-.29 1.67.32 1.67 1.18v5.5c0 .87-.86 1.47-1.67 1.18l-1.38-.5A2 2 0 0 1 7 13v-.98Zm3 1.07A1 1 0 0 1 8 13v-.62l2 .71Z";
   
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